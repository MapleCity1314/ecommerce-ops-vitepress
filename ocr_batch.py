"""批量 OCR — 解决 OpenCV Windows 中文路径问题"""
import easyocr, os, sys, shutil, tempfile
from pathlib import Path

BASE = Path(r'E:\code\learn\电商')

# 要处理的目录列表
TARGET_DIRS = [
    '01-测款SOP流程搭建',
    '02-测图SOP流程打造',
    '04-新品快速打爆SOP流程',
    '07-运营培育体系搭建（岗位画像+招育留汰）',
]

reader = easyocr.Reader(['ch_sim', 'en'], gpu=True)

for dir_name in TARGET_DIRS:
    img_dir = BASE / dir_name / 'images'
    out_dir = BASE / dir_name / 'ocr_output'
    out_dir.mkdir(exist_ok=True)

    imgs = sorted(img_dir.glob('*.png')) + sorted(img_dir.glob('*.jpg'))
    if not imgs:
        print(f'[SKIP] {dir_name}: no images')
        continue

    print(f'\n{"="*60}')
    print(f'[{dir_name}] {len(imgs)} images')
    print(f'{"="*60}')

    for img_path in imgs:
        # 复制到临时 ASCII 文件名
        tmp = tempfile.NamedTemporaryFile(suffix=img_path.suffix, delete=False)
        tmp.close()
        shutil.copy2(str(img_path), tmp.name)

        try:
            results = reader.readtext(tmp.name)
        finally:
            os.unlink(tmp.name)

        out_file = out_dir / (img_path.stem + '.txt')
        lines = [f'[{conf:.2f}] {text}' for (_, text, conf) in results]
        out_file.write_text('\n'.join(lines), encoding='utf-8')

        print(f'  {img_path.name}: {len(results)} text blocks -> {out_file.name}')
        for (_, text, conf) in results:
            print(f'    [{conf:.2f}] {text}')

print('\nDone!')

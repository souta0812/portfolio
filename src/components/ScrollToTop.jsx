import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // 1. 現在のURL情報を取得
  const { pathname } = useLocation();

  // 2. pathname (URLのパス) が変更されるたびに...
  useEffect(() => {
    // 3. ページの(x: 0, y: 0) の位置にスクロールする
    window.scrollTo(0, 0);
  }, [pathname]); // <-- 依存配列に pathname を指定

  // 4. このコンポーネント自体は何も表示しない
  return null;
}

export default ScrollToTop;
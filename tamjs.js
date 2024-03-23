window.onload = function() {
  const loader = document.getElementById('loader');
  const randomText = document.getElementById('random-text');
  const contentFrame = document.getElementById('content-frame');
  const body = document.body;

  // 隐藏加载动画和显示随机文本
  function showRandomText() {
    const texts = ['欢迎来到我的网站', '正在加载中...', '请稍等片刻'];
    const probabilities = [0.5, 0.3, 0.2];
    
    function getRandomText() {
      const randomNum = Math.random();
      let cumulativeProbability = 0;
      
      for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        
        if (randomNum < cumulativeProbability) {
          return texts[i];
        }
      }
    }
    
    randomText.textContent = getRandomText();
  }

  // 加载完成后隐藏加载动画和随机文本，显示内容
  function loaded() {
    body.classList.add('loaded');
  }

  // 检查iframe是否加载完成
  contentFrame.onload = function() {
    loaded();
  };

  // 显示随机文本
  showRandomText();
};

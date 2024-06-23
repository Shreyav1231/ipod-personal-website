document.addEventListener("DOMContentLoaded", function() {
  let currentScene = 1;
  const totalScenes = 4;

  const scenes = document.querySelectorAll(".scene");
  const buttonMenu = document.getElementById("button-menu");
  const buttonForward = document.getElementById("button-forward");
  const buttonPause = document.getElementById("button-pause");
  const buttonRewind = document.getElementById("button-rewind");

  function showScene(sceneNumber) {
      scenes.forEach((scene, index) => {
          scene.style.display = (index === sceneNumber - 1) ? 'block' : 'none';
      });
  }

  buttonMenu.addEventListener("click", function() {
      currentScene = 1;
      showScene(currentScene); 
  });

  buttonForward.addEventListener("click", function() {
      if (currentScene < totalScenes) {
          currentScene++;
      } else {
          currentScene = 1; 
      }
      showScene(currentScene);
  });

  buttonRewind.addEventListener("click", function() {
      if (currentScene > 1) {
          currentScene--;
      } else {
          currentScene = totalScenes; 
      }
      showScene(currentScene);
  });

  document.querySelectorAll("#scene-1 button").forEach((button, index) => {
      button.addEventListener("click", function() {
          currentScene = index + 2; 
          showScene(currentScene);
      });
  });

  showScene(currentScene);
});

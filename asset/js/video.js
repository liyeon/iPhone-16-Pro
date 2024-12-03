// 동영상 반응형 적용
// 모든 비디오 요소에 대해 소스를 업데이트하는 함수
function updateAllVideoSources() {
  const videoElements = document.querySelectorAll("video[data-video-path]");
  videoElements.forEach(updateVideoSource);
}

// 특정 비디오 요소의 소스를 업데이트하는 함수
function updateVideoSource(element) {
  const width = window.innerWidth;
  let videoFileName = "";

  // 브라우저 크기에 따라 파일명 설정
  if (width <= 480) {
    videoFileName = "xsmall.mp4";
  } else if (width <= 734) {
    videoFileName = "small.mp4";
  } else if (width <= 1068) {
    videoFileName = "medium.mp4";
  } else if (width <= 1440) {
    videoFileName = "large.mp4";
  } else {
    videoFileName = "xlarge.mp4";
  }

  // 동적으로 비디오 소스 설정
  const basePath = element.getAttribute("data-video-path");
  const newSource = `${basePath}${videoFileName}`;

  // 소스가 없거나 변경되었으면 새로운 소스 추가
  if (
    !element.querySelector("source") ||
    element.querySelector("source").src !== newSource
  ) {
    // 기존 소스 제거
    element.innerHTML = "";

    // 새로운 소스 추가
    const sourceElement = document.createElement("source");
    sourceElement.src = newSource;
    sourceElement.type = "video/mp4";
    element.appendChild(sourceElement);
    element.load(); // 비디오 로드
  }
}

// 윈도우 크기 변경 시 모든 비디오 소스를 업데이트
window.addEventListener("resize", updateAllVideoSources);
window.addEventListener("load", updateAllVideoSources);
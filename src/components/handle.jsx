export function handleClick({message}) {
        alert(message);
}

export function handlePlay({message}) {
    const videoSource = document.getElementById(message);
    if (videoSource) videoSource.play();
}

export function handleStop({message}) {
    const videoSource = document.getElementById(message);
    if (videoSource) videoSource.pause();

}
//video play
window.addEventListener('click', function (event){
    let videoBlock = event.target.closest('.video');
    let videoPlay = event.target.closest('.video-iframe');

    if(!videoBlock.classList.contains('watch-video')){
        videoBlock.classList.add('watch-video');
        videoPlay.querySelector('iframe').play();
    }else{
        videoBlock.classList.remove('watch-video');
        videoPlay.querySelector('iframe').pause();
    }
});
//video play:END
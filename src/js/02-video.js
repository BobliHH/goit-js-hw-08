import Player from '@vimeo/player';
import throttle from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const clickPlay = function (time) {
    localStorage.setItem('videoplayer-current-time', time.seconds);
}

player.on('timeupdate', throttle(clickPlay, 1000));



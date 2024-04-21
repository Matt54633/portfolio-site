import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/JHyD7accTESlJqsJ/scene.splinecode');

window.addEventListener('mousedown', () => {
    document.getElementById('orbit_img').style.display = 'none';
});
window.addEventListener('touchstart', () => {
    document.getElementById('orbit_img').style.display = 'none';
});
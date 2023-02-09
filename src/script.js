import { nanoid } from 'nanoid';
import './style.css';

const btn = document.querySelector('#btn');
const displayPas = document.querySelector ('#h2');

btn.addEventListener('click', () => displayPas.innerHTML = nanoid());
/**
 * Import Phaser dependencies using `expose-loader`.
 * This makes then available globally and it's something required by Phaser.
 * The order matters since Phaser needs them available before it is imported.
 */

import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

/**
 * Create a new Phaser game instance.
 * And render a single sprite so we make sure it works.
 */

window.game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('logo', './assets/images/phaser.png');
}

function create() {
game.stage.backgroundColor = '#aaa'
  this.logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
  this.logo.anchor.setTo(0.5, 0.5);

	let a = 1;
	let b = 2;

	let qq = game.add.text(0, 0, `a= ${a}, b= ${b}`);
	[a, b] = [b, a];
	qq.text +=`\n ora...\n ...a= ${a}, b= ${b}`
	//qq.text += "a= "+a+", b="+b;
	console.log(qq, qq.text, "a:",a, "b:",b);
};
  
function update() {
  // ¯ \_(ツ)_/¯ 
  // "surprise me"
}


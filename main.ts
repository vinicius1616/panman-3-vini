tiles.setTilemap(tilemap`level1`)
let Black = sprites.create(img`
    . . f f f f f f f f f f . 
    . . f f f f f f f f f f . 
    . . f f f f 9 9 9 9 9 f . 
    f f f f f f f 9 9 9 f f . 
    f c f f f f f f f f f f . 
    f c f f f f f f f f f f . 
    f c f f f f f f f 2 f f . 
    f c f f f f f f f 2 2 f . 
    f c f f f f f f f f f f . 
    f c f f f f f f f f f f . 
    f f f f f f . . f f f f . 
    . . f f f f . . f f f f . 
    . . f f f f . . f f f f . 
    `, SpriteKind.Player)
let Policial_1 = sprites.create(img`
    . . f f f f f f f f f f . 
    . . f 1 1 1 1 1 1 1 1 f . 
    . . f 1 8 1 5 5 5 5 5 f . 
    f f f 1 8 1 1 5 5 5 1 f . 
    f 1 f 1 8 1 1 1 1 1 1 f . 
    f 1 f 1 8 1 1 1 1 1 1 f . 
    f 1 f 1 8 1 1 1 1 2 1 f . 
    f 1 f 1 8 1 1 1 1 2 2 f . 
    f 1 f 1 8 1 1 1 1 1 1 f . 
    f 1 f 1 1 f f f f 1 1 f . 
    f f f 1 1 f . . f 1 1 f . 
    . . f 1 1 f . . f 1 1 f . 
    . . f f f f . . f f f f . 
    `, SpriteKind.Enemy)
let Policial_2 = sprites.create(img`
    . . f f f f f f f f f f . 
    . . f d d d d d d d d f . 
    . . f d 8 d 5 5 5 5 5 f . 
    f f f d 8 d d 5 5 5 d f . 
    f d f d 8 d d d d d d f . 
    f d f d 8 d d d d d d f . 
    f d f d 8 d d d d 2 d f . 
    f d f d 8 d d d d 2 2 f . 
    f d f d 8 d d d d d d f . 
    f d f d d f f f f d d f . 
    f f f d d f . . f d d f . 
    . . f d d f . . f d d f . 
    . . f f f f . . f f f f . 
    `, SpriteKind.Enemy)
let comida = sprites.create(img`
    . . f f f f f f f f f f . 
    . . f 4 4 4 4 4 4 4 4 f . 
    . . f 4 8 4 5 5 5 5 5 f . 
    f f f 4 8 4 4 5 5 5 4 f . 
    f 4 f 4 8 4 4 4 4 4 4 f . 
    f 4 f 4 8 4 4 4 4 4 4 f . 
    f 4 f 4 8 4 4 4 4 2 4 f . 
    f 4 f 4 8 4 4 4 4 2 2 f . 
    f 4 f 4 8 4 4 4 4 4 4 f . 
    f 4 f 4 4 f f f f 4 4 f . 
    f f f 4 4 f . . f 4 4 f . 
    . . f 4 4 f . . f 4 4 f . 
    . . f f f f . . f f f f . 
    `, SpriteKind.Enemy)
comida = sprites.create(img`
    . . f f f f f f f f f f . 
    . . f 3 3 3 3 3 3 3 3 f . 
    . . f 3 8 3 5 5 5 5 5 f . 
    f f f 3 8 3 3 5 5 5 3 f . 
    f 3 f 3 8 3 3 3 3 3 3 f . 
    f 3 f 3 8 3 3 3 3 3 3 f . 
    f 3 f 3 8 3 3 3 3 2 3 f . 
    f 3 f 3 8 3 3 3 3 2 2 f . 
    f 3 f 3 8 3 3 3 3 3 3 f . 
    f 3 f 3 3 f f f f 3 3 f . 
    f f f 3 3 f . . f 3 3 f . 
    . . f 3 3 f . . f 3 3 f . 
    . . f f f f . . f f f f . 
    `, SpriteKind.Enemy)
comida = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f . f f f f f . . 
    . . f f 3 3 3 f f f 3 3 3 f f . 
    . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
    . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
    . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
    . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
    . . f f 3 3 3 b b b 3 3 3 f f . 
    . . . f f 3 b b b b b 3 f f . . 
    . . . . f f b b b b b f f . . . 
    . . . . . f f b b b f f . . . . 
    . . . . . . f f b f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
comida = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f . f f f f f . . 
    . . f f 3 3 3 f f f 3 3 3 f f . 
    . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
    . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
    . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
    . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
    . . f f 3 3 3 b b b 3 3 3 f f . 
    . . . f f 3 b b b b b 3 f f . . 
    . . . . f f b b b b b f f . . . 
    . . . . . f f b b b f f . . . . 
    . . . . . . f f b f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
comida = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f . f f f f f . . 
    . . f f 3 3 3 f f f 3 3 3 f f . 
    . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
    . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
    . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
    . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
    . . f f 3 3 3 b b b 3 3 3 f f . 
    . . . f f 3 b b b b b 3 f f . . 
    . . . . f f b b b b b f f . . . 
    . . . . . f f b b b f f . . . . 
    . . . . . . f f b f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
animation.runImageAnimation(
Black,
[img`
    . . f f f f f f f f f f . 
    . . f f f f f f f f f f . 
    . . f f f f 9 9 9 9 9 f . 
    f f f f f f f 9 9 9 f f . 
    f c f f f f f f f f f f . 
    f c f f f f f f f f f f . 
    f c f f f f f f f 2 f f . 
    f c f f f f f f f 2 2 f . 
    f c f f f f f f f f f f . 
    f c f f f f f f f f f f . 
    f f f f f f . . f f f f . 
    . . f f f f . . f f f f . 
    . . f f f f . . f f f f . 
    `,img`
    . . f f f f f f f f f f . 
    . . f f f f f f f f f f . 
    . . f f f f 9 9 9 9 9 f . 
    f f f f f f f 9 9 9 f f . 
    f c f f f f f f f f f f . 
    f c f f f f f f f f f f . 
    f c f f f f f f f 2 . . . 
    f c f f f f f f f 2 2 . . 
    f c f f f f f f f f f f . 
    f c f f f f f f f f f f . 
    f f f f f f . . f f f f . 
    . . f f f f . . f f f f . 
    . . f f f f . . f f f f . 
    `],
500,
true
)
info.setScore(20)
Black.setPosition(63, 61)
scene.cameraFollowSprite(Black)
controller.moveSprite(Black, 100, 100)
Black.setPosition(50, 20)
Policial_1.setPosition(randint(0, 10), 20)

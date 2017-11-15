function momfruitsCollision() {
    for (var i = 0; i < fruits.num; i++) {
        if (fruits.alive[i]) {
            var l = calLength2(fruits.x[i], fruits.y[i], bigFish.x, bigFish.y);
            if (l < 900) {
                fruits.dead(i);
            }
        }
    }
}
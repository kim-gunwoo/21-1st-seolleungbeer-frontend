import MovingPoint from './MovingPoint';

// const movingPoints = [];

export default class BeerFoam {
  constructor(canvasContainer) {
    this.movingPoints = [];
    this.canvasContainer = canvasContainer;

    // console.log(this.canvas);
    for (let i = 0; i <= 5; i++) {
      this.movingPoints.push(
        new MovingPoint(
          this.canvasContainer.clientWidth * i * 0.2,
          this.canvasContainer.clientHeight * 0.72,
          i * 0.35
        )
      );
    }
    console.log(this.movingPoints);
  }

  draw(canvas, ctx) {
    // console.log(this.ctx);
    ctx.beginPath();

    let prevX = this.movingPoints[0].x;
    let prevY = this.movingPoints[0].y;

    ctx.moveTo(prevX, prevY);

    for (let i = 0; i < this.movingPoints.length; i++) {
      this.movingPoints[i].update(canvas, ctx);

      const cx = (prevX + this.movingPoints[i].x) / 2;
      const cy = (prevY + this.movingPoints[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.movingPoints[i].x;
      prevY = this.movingPoints[i].y;
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(this.movingPoints[0].x, canvas.height);
    // console.log(ctx);

    const beerFoamColor = ctx.createLinearGradient(0, 0, canvas.width, 0);

    beerFoamColor.addColorStop(0, '#DCDCDC');
    // beerFoamColor.addColorStop(0.2, '#F5F5F5');
    // beerFoamColor.addColorStop(0.4, '#F8F8FF');
    beerFoamColor.addColorStop(0.5, '#F5F5F5');
    // beerFoamColor.addColorStop(0.6, '#F8F8FF');
    // beerFoamColor.addColorStop(0.8, '#F5F5F5');
    beerFoamColor.addColorStop(1, '#DCDCDC');

    ctx.globalAlpha = 0.85;
    ctx.fillStyle = beerFoamColor;
    ctx.fill();
    ctx.closePath();
  }
}

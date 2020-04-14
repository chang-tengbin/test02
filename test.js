// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 160,
    height: 160
  });
  
  // then create a layer
  var layer = new Konva.Layer();
  
  // create our shape
  var circle = new Konva.Circle({
    x: stage.width() / 2,   // x position of the center
    y: stage.height() / 2,  // y position of the center
    radius: 70,             // circle radius
    fill: 'red',            // color to fill the area
    stroke: 'black',        // color to draw the line
    strokeWidth: 4          // line width
  });
  
  // add the shape to the layer
  layer.add(circle);
  
  // add the layer to the stage
  stage.add(layer);
  
  // draw the image
  layer.draw();
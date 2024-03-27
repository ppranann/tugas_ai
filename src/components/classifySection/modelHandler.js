import * as tf from '@tensorflow/tfjs';

async function loadModel() {
  const model = tf.loadGraphModel(
		'/model/json/model.json'
	);

  // Cek model
  try {
    await model;
  } catch (error) {
    throw new Error('Model Not Found');
  }

  return model;
}

function imageClasses() {
  const classes = {
    0: 'Battery', // 'Battery',
    1: 'Biological',  // 'Biological',
    2: 'Brown Glass',  // 'Brown Glass',
    3: 'Cardboard' , // 'Cardboard',
    4: 'Clothes', // 'Clothes',
    5: 'Green Glass', // 'Green Glass',
    6: 'Metal' , // 'Metal',
    7: 'Paper', // 'Paper',
    8: 'Plastic', // 'Plastic',
    9: 'Shoes', // 'Shoes',
    10: 'Trash', // 'Trash',
    11: 'White Glass' // 'White Glass',
  };

  return classes;
}

async function classifyModel(image, setResults, setIsLoading) {
  setIsLoading(true);
  const model = await loadModel();
  const IMAGE_CLASSES = imageClasses();

	const tensorImg = tf.browser
  .fromPixels(image)
  .resizeNearestNeighbor([224, 224])
  .toFloat()
  .expandDims();
  
  const prediction = await model.predict(tensorImg).data();
  const results = Array.from(prediction).map(function (probablity, index) {
    return {
      probability: probablity,
      className: IMAGE_CLASSES[index],
    };
  })
  .sort(function (a, b) {
    return b.probability - a.probability;
  })
  .slice(0, 3);

  setResults(results);
  setIsLoading(false);
}

export default classifyModel;
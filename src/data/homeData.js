const hero =
{
  title: 'Garbage Classification',
  subtitle: 'Web-Based',
  desc: 'Integrating Machine Learning Image Classification model for classifying 12 garbage End-to-End for users.',
  video: '/video/hero.webm',
  image: '/img/hero.webp',
  cta: 'Start Now',
};

const about = {
  title: 'What is Garbage Classification?',
  desc: 'Web-Based Application for Classifying Garbage ',
  image: '/img/about-illustration.webp',
};

const steps =
{
  title: 'How to Use?',
  stepsBody: [
    {
      id: 0,
      title: 'Choose Image',
      desc: 'Choose Image for Garbage Classification',
      image: '/img/steps/input.webp',
    },
    {
      id: 1,
      title: 'Classify',
      desc: 'Model Machine Learning will then classify based on the model',
      image: '/img/steps/classify.png',
    },
    {
      id: 2,
      title: 'Classification Result',
      desc: 'Classification Result will show the type of waste, with the accuracy in percentage',
      image: '/img/steps/result.webp',
    }
  ]
};

const featured = 
{
  title: 'Advantage',
  subtitle: 'This application has several features that can help users classify waste.',
  features: [
    {
      id: 0,
      title: 'Classification of 12 Types of Waste',
      desc: 'This application can classify waste into 12 types and categories of waste, as well as match percentages.',
    },
    {
      id: 1,
      title: 'Easy to Use',
      desc: 'This application can be used by anyone without having to understand Machine Learning.',
    },
    {
      id: 2,
      title: 'End-to-End',
      desc: 'This application integrates Web-based End-to-End Machine Learning models, so users dont need to install Python and run Machine Learning models.',
    },
  ]
};

const footer =
{
  copy: 'Artifical Intelligence Project',
  }


export { hero, about, steps, featured, footer };
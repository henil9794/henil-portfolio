import churnImg from '../assets/projects/churn.png'

export const projects = [
  {
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    description:
      'Built a classification model to predict which telecom customers are likely to cancel their service. Engineered features from usage and billing data and compared several models, with gradient boosting performing best.',
    tags: ['Python', 'Pandas', 'scikit-learn', 'XGBoost'],
    github: 'https://github.com/your-username/churn-prediction',
    demo: '',
    image: churnImg,
  },
  {
    title: 'Product Review Sentiment Analysis',
    category: 'NLP',
    description:
      'Fine-tuned a transformer model to classify product reviews as positive, negative, or neutral. Compared it against a TF-IDF baseline and analyzed where each approach made mistakes.',
    tags: ['Python', 'Hugging Face', 'PyTorch', 'NLTK'],
    github: 'https://github.com/your-username/sentiment-analysis',
    demo: '',
    image: null,
  },
  {
    title: 'Housing Market Exploratory Analysis',
    category: 'Data Analysis',
    description:
      'Explored a regional housing dataset to understand what drives home prices. Cleaned missing data, visualized trends by neighborhood and year, and summarized findings in a short report.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/your-username/housing-eda',
    demo: '',
    image: null,
  },
  {
    title: 'Retail Sales Dashboard',
    category: 'Data Analysis',
    description:
      'Designed an interactive dashboard tracking sales, top products, and regional performance over time, making it easy for non-technical users to spot trends.',
    tags: ['SQL', 'Python', 'Plotly Dash'],
    github: 'https://github.com/your-username/sales-dashboard',
    demo: 'https://example.com',
    image: null,
  },
]
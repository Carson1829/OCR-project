# Handwritten Optical Character Recognition
Full-stack application that would allow users to handwrite sentences in a window to generate text.

## Dataset
The dataset used to train the model is a the IAM_sentences dataset consisting of images of handwritten sentences and words. It can be found [here](https://www.kaggle.com/datasets/debadityashome/iamsentences).

## Model
This model is a deep neural network designed for sequence-based image processing, incorporating convolutional residual blocks and bidirectional LSTMs. It combines convolutional layers for feature extraction with bidirectional LSTMs to model dependencies. The model was trained with 80% of the dataset. 

## Web Application
The front-end was written using HTML/CSS and TypeScript, using Next.JS to aid in development. The back-end uses Flask and was written in python. The model was deployed and hosted in AWS EC2.




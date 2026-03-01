import pandas as pd
from sklearn.model_selection import train_test_split
def load_and_preprocess_data(file_path):
    #load from csv
    df = pd.read_csv(file_path)

    #drop NaNa values columns
    df.dropna(inplace=True)

    #drop name column and change categorical data into numerical
    df.drop('name', axis=1, inplace=True)
    df = pd.get_dummies(df, columns=['fuel', 'seller_type', 'transmission'], drop_first=True)
    df['owner'] = df['owner'].map({
        'First Owner': 1,
        'Second Owner': 2,
        'Third Owner': 3,
        'Fourth & Above Owner': 4,
        'Test Drive Car': 5
    })
    df['max_power'] = pd.to_numeric(df['max_power'], errors='coerce')
    df.dropna(subset=['max_power'], inplace=True)

    #Seperate features and target variable
    X_df = df.drop('selling_price', axis=1)
    Y_df = df['selling_price']

    #Assign features and target variable to X and Y
    X = X_df.values
    Y = Y_df.values

    return train_test_split(X, Y, train_size=0.2, random_state=42)
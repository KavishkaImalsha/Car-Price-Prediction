from preproccesing import load_and_preprocess_data
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestClassifier
from joblib import dump

if __name__ == '__main__':
    X_train, X_test, Y_train, Y_test = load_and_preprocess_data('../data/cardekho.csv')

    #Normalization
    scaler = StandardScaler()
    X_trained_scale = scaler.fit_transform(X_train)
    X_tested_scale = scaler.transform(X_test)

    #Train the models
    model = LinearRegression() #Linear Regression
    model.fit(X_trained_scale, Y_train)

    rf_model = RandomForestClassifier() #Random Forest Classifier
    rf_model.fit(X_train, Y_train)

    dump(model, '../models/linear_regression_model.pkl')
    print("Linear Regression model saved successfully.")

    dump(rf_model, '../models/random_forest_model.pkl')
    print("Random Forest model saved successfully.")
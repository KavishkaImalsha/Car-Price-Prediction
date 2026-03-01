from src.Schemas.CarFeatures import CarFeatures
def input_perprocessing(data: CarFeatures):
    OWNER_MAP = {
        "First Owner": 0,
        "Second Owner": 1,
        "Third Owner": 2,
        "Fourth & Above Owner": 3,
        "Test Drive Car": 4
    }

    #Mapping and One-Hot Encoding logic here
    owner_val = OWNER_MAP.get(data.owner, 0)
    
    f_diesel = 1 if data.fuel == "Diesel" else 0
    f_lpg    = 1 if data.fuel == "LPG" else 0
    f_petrol = 1 if data.fuel == "Petrol" else 0
    
    s_individual = 1 if data.seller_type == "Individual" else 0
    s_trustmark  = 1 if data.seller_type == "Trustmark Dealer" else 0
    
    t_manual = 1 if data.transmission == "Manual" else 0

    return [[
        data.year, data.km_driven, owner_val, data.mileage, 
        data.engine, data.max_power, data.seats,
        f_diesel, f_lpg, f_petrol, 
        s_individual, s_trustmark, t_manual
    ]]
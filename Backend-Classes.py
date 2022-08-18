

class Personnel:
    def __init__(self,):
        pass

class Car:
    def __init__(self, color, brand, model, plate_num, year="XXXX", ):
        self.color = color
        self.year = year
        self.brand = brand
        self.model = model
        self.plate_num = plate_num




    def return_Car(self):
        return self.color + " " + self.year + " " + self.brand + " " +self.model



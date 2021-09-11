export interface DroneItem {
  name: string,
  price: number,
  photo: string,
  isRented?: boolean,
  description?: string,
}

export interface RentingForm {
  name: string,
  surname: string,
  email: string
  totalPrice: number,
  droneId: string,
  startDate: string,
  endDate: string,
}

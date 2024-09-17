interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
interface ICustomerBuilder {
  setFirstName(firstName: string): ICustomerBuilder;
  setLastName(lastName: string): ICustomerBuilder;
  setEmail(email: string): ICustomerBuilder;
  setPhoneNumber(phoneNumber: string): ICustomerBuilder;
  build(): ICustomer;
}

class Customer implements ICustomer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string
  ) {}
}
class CustomerBuilder implements ICustomerBuilder {
  private customer: ICustomer = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };
  setFirstName(firstName: string): ICustomerBuilder {
    this.customer.firstName = firstName;
    return this;
  }
  setLastName(lastName: string): ICustomerBuilder {
    this.customer.lastName = lastName;
    return this;
  }
  setEmail(email: string): ICustomerBuilder {
    this.customer.email = email;
    return this;
  }
  setPhoneNumber(phoneNumber: string): ICustomerBuilder {
    this.customer.phoneNumber = phoneNumber;
    return this;
  }
  build(): ICustomer {
    return new Customer(
      this.customer.firstName,
      this.customer.lastName,
      this.customer.email,
      this.customer.phoneNumber
    );
  }
}
class CustomerDirector {
  constructor(private builder: ICustomerBuilder) {}
  buildMinimal(firstName: string, lastName: string, email: string): ICustomer {
    return this.builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .setPhoneNumber("")
      .build();
  }
}

const customerBuilder: ICustomerBuilder = new CustomerBuilder();
const customerDirector: CustomerDirector = new CustomerDirector(
  customerBuilder
);

const MVC = customerDirector.buildMinimal(
  "Kartik",
  "Joshi",
  "kartik.joshi@myrealdata.in"
);
console.log(MVC);

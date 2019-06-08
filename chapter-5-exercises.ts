// tslint:disable: max-classes-per-file
// tslint:disable: interface-over-type-literal
// tslint:disable: interface-name
export {};
// 1. -> An interface is closer to a type alias than a class. Basically, an interface allows you to model a shape. It doesn't actually result in any generated JavaScript and it only defines a type; its main purpose is to enforce your typing. A class, on the other hand, does compile into actual code and has many more features, such as the ability to create methods, setting access / visibility modifiers, and defines a type and a value.
// 2. -> Protected is similar to private in the sense that it prevents outside code from accessing / calling a specific method or property. Protected, however, restricts said accessibility to instances of the class or subclasses that extend that class. The end result is that you can't call new on either the parent class or one of its subclasses.
// 3. ->
type Shoe = {
	purpose: string;
};

class BalletFlat implements Shoe {
	public purpose = "dancing";
}

class Sneaker implements Shoe {
	public purpose = "walking";
}

class Boot implements Shoe {
	public purpose = "woodcutting";
}

type ShoeFactory = {
	create(type: "balletFlat"): BalletFlat;
	create(type: "boot"): Boot;
	create(type: "sneaker"): Sneaker;
};

const Shoe: ShoeFactory = {
	create(type: "balletFlat" | "boot" | "sneaker"): Shoe {
		switch (type) {
			case "balletFlat":
				return new BalletFlat();
			case "boot":
				return new Boot();
			case "sneaker":
				return new Sneaker();
		}
	},
};

Shoe.create("balletFlat");
Shoe.create("boot");
Shoe.create("sneaker");

// 4. (a. & b.) ->

interface BuiltRequest {
	data?: object;
	method: "get" | "post";
	url: string;
}

class RequestBuilder {
	public setData(data: object): this & Pick<BuiltRequest, "data"> {
		return Object.assign(this, { data });
	}
	public setMethod(
		method: "get" | "post",
	): this & Pick<BuiltRequest, "method"> {
		return Object.assign(this, { method });
	}
	public setURL(url: string): this & Pick<BuiltRequest, "url"> {
		return Object.assign(this, { url });
	}
	public send(this: BuiltRequest) {
		return this;
	}
}

const req = new RequestBuilder()
	.setURL("/users")
	.setMethod("get")
	.setData({ firstName: "Anna" })
	.send();

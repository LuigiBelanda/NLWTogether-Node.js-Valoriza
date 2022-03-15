import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  // aqui fazemos um desestruturação dos dados que chegam como base na interface acima
  async execute({ name, email, admin }: IUserRequest) {
    // instanciando a classe do nosso repo UserRepositories que ja tem algumas funções prontas
    const usersRepository = new UserRepositories();

    // verificamos se o campo email veio com algo
    if (!email) {
      throw new Error("Email incorrect");
    }

    // verificamos se o user já existe
    const usersAlreadyExists = await usersRepository.findOne({
      email,
    });

    // se existir lançamos um erro
    if (usersAlreadyExists) {
      throw new Error("User already exists");
    }

    // passando os dados para criar o user
    const user = usersRepository.create({
      name,
      email,
      admin,
    });

    // salvando o user que queremos criar
    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };

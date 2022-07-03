const db = {
    usuarios: [
      {
        id: generateUUID(),
        login: "admin",
        password: "123",
        name: "Administrador do Sistema",
        email: "admin@abc.com",
        birth: "01/01/2001",
        tel: "xxx",
        createdAt: "01/01/2001",
        solutions: 0,
      },
      {
        id: generateUUID(),
        login: "user",
        senha: "123",
        nome: "Usuario Comum",
        email: "user@abc.com",
        birth: "01/01/2001",
        tel: "xxx",
        createdAt: "01/01/2001",
        solutions: 0,
      },
    ],
  };

  export default db


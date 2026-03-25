exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
<<<<<<< HEAD
    // For reference, GitHub limits usernames to 39 chareacters
=======
    // For reference, GitHub limist usernames to 39 chareacters
>>>>>>> d1ac6396db2aca10f1723a9fe2bbb5f91a88892e
    username: {
      type: "varchar(30)",
      notNull: true,
      unique: true,
    },
    // Why 254 in lenght? https://stackoverflow.com/a/1199238
    email: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },
<<<<<<< HEAD
    // Why 60 in lenght? http://www.npmjs.com/package/bcrypt#hash-info
=======
    // Why 72 in lenght? https://security.stackexchange.com/q/39849
>>>>>>> d1ac6396db2aca10f1723a9fe2bbb5f91a88892e
    password: {
      type: "varchar(72)",
      notNull: true,
    },
<<<<<<< HEAD
    // Why timestamp with timezone? https://justatheory.com/2012/04/postgres-use-timestampz/
    create_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("timezone('utc',now())"),
    },
    updated_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("timezone('utc',now())"),
=======
    // Why timestamp with timezone https://justatheory.com/2012/04/postgres-use-timestampz/
    create_at: {
      type: "timestamptz",
      default: pgm.func("now()"),
    },
    updated_at: {
      type: "timestamptz",
      default: pgm.func("now()"),
>>>>>>> d1ac6396db2aca10f1723a9fe2bbb5f91a88892e
    },
  });
};

exports.down = false;

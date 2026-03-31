exports.up = (pgm) => {
  pgm.renameColumn("users", "create_at", "created_at");
};

exports.down = false;

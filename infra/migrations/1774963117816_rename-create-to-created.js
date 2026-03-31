exports.up = (pgm) => {
  pgm.renameColumn("sessions", "create_at", "created_at");
};

exports.down = false;

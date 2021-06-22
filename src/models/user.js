'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    nama_lengkap: DataTypes.STRING,
    tempat_lahir: DataTypes.DATE,
    deskripsi: DataTypes.STRING,
    alamat_asal: DataTypes.STRING,
    alamat_sekarang: DataTypes.STRING,
    nomer_hp: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    pendidikan: DataTypes.STRING,
    institusi: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    sosial_media: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_lengkap: {
        type: Sequelize.STRING
      },
      tempat_lahir: {
        type: Sequelize.DATE
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      alamat_asal: {
        type: Sequelize.STRING
      },
      alamat_sekarang: {
        type: Sequelize.STRING
      },
      nomer_hp: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      pendidikan: {
        type: Sequelize.STRING
      },
      institusi: {
        type: Sequelize.STRING
      },
      pekerjaan: {
        type: Sequelize.STRING
      },
      sosial_media: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
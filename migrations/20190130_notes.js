'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('notes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maintain_id: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          allowNull: false,
          references: {
            model: 'maintains',
            key: 'id'
          }
      },
      name:   Sequelize.STRING(128),
      description: Sequelize.TEXT,
      image_filename: Sequelize.STRING(255),
      doc_filename: Sequelize.STRING(255),
      status: {
          type: Sequelize.ENUM,
          values: ['active','inactive'],
          defaultValue: 'active'
      },
      complete: Sequelize.BOOLEAN
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('notes');
  }
};

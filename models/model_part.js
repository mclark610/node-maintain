/*
 * part table tracks all the parts information. Part can be used by the maintenance table.
 */

module.exports = (sequelize, DataTypes) => {
    let Part = sequelize.define('part', {
      id:  {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      maintain_id: {
          type: DataTypes.INTEGER,
          onDelete: "CASCADE",
          allowNull: false,
          references: {
            model: 'maintains',
            key: 'id'
          }
      },
      name:   DataTypes.STRING(128),
      part_nbr: DataTypes.STRING(48),
      price: DataTypes.DECIMAL(8,2),
      description: DataTypes.TEXT,
      vendor: DataTypes.STRING(255),
      image_filename: DataTypes.STRING(255),
      doc_filename: DataTypes.STRING(255),
      status: {
          type: DataTypes.ENUM,
          values: ['active','inactive'],
          defaultValue: 'active'
      },
      complete: DataTypes.BOOLEAN
    },
    {
        timestamps        : true,
        tableName         : 'parts',
    });

    Part.associate = function(models) {
        models.Part.belongsTo(models.maintain, {
              onDelete: "CASCADE",
              foreignKey: {
                allowNull: false
              }
        });
    };
    return Part;
}

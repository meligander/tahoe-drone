module.exports = (sequelize, type) => {
	return sequelize.define('user', {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		email: { type: type.STRING, allowNull: false, unique: true },
		password: type.STRING,
		name: { type: type.STRING, allowNull: false },
		lastname: { type: type.STRING, allowNull: false },
		cel: { type: type.STRING, allowNull: false },
		type: { type: type.ENUM, allowNull: false, values: ['customer', 'admin'] },
		resetLink: { type: type.STRING, default: '' },
	});
};

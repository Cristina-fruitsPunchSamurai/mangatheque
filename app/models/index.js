const Bd = require('./bd');
const Tag = require('./tag');
const User = require('./user');
const Role = require('./role');

// * BD et Tag
//0,N
Bd.belongsToMany(Tag,{
    as: 'tags',
    through: 'bd_has_tag',
    foreignKey: 'bd_id',
    otherKey: 'tag_id',
})

//0,N
Tag.belongsToMany(Bd, {
    as: 'mangas',
    through: 'bd_has_tag',
    foreignKey: 'tag_id',
    otherKey: 'bd_id',
});

// * User et Role
//1,1
User.belongsTo(Role,{
    foreignKey:'role_id',
    as:'role',
});

//1, N
Role.hasMany(User,{
    foreignKey: 'role_id',
    as: 'users',
});

module.exports = {Bd, Tag, User, Role};

const Bd = require('./bd');
const Tag = require('./tag');
//const User = require('./user');

// * BD et Tag
Bd.belongsToMany(Tag,{
    as: 'tags',
    through: 'bd_has_tag',
    foreignKey: 'bd_id',
    otherKey: 'tag_id',
})

Tag.belongsToMany(Bd, {
    as: 'mangas',
    through: 'bd_has_tag',
    foreignKey: 'tag_id',
    otherKey: 'bd_id',
});

module.exports = {Bd, Tag};

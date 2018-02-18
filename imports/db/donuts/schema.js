import SimpleSchema from 'simpl-schema';

const DonutsSchema = new SimpleSchema({
    name: {
        type: String
    },
    isComestible: {
        type: Boolean,
        optional: true,
    },
    image: {
      type: String,
      optional: true,
    },
    price: {
        type: Number
    },
    createdAt: {
        type: Date,
        optional: true
    },
    userId: {
        type: String,
        optional: true
    }
});

export default DonutsSchema;

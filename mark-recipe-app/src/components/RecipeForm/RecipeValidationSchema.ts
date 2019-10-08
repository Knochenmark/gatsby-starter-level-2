import * as Yup from 'yup';

export const RecipeValidationSchema = Yup.object().shape({
  imageUrl: Yup.string(),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
  preparationTime: Yup.string()
    .required('This field is required')
    .matches(/^[0-9]*$/, 'Must be a number'),
  cookingTime: Yup.string()
    .required('This field is required')
    .matches(/^[0-9]*$/, 'Must be a number'),
  instructions: Yup.string()
    .min(2, 'Too Short!')
    .required('This field is required'),
});

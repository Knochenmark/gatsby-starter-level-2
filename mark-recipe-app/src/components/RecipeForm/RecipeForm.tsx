import {
  Field,
  FieldArray,
  FieldProps,
  Form,
  Formik,
  FormikProps
} from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';

import { emptyRecipe } from '../../_config/exampleRecipeList';
import { Difficulty } from '../../_domain/Difficulty';
import { IRecipe } from '../../_domain/IRecipe';
import { IStoreState } from '../../_domain/IStoreState';
import {
  saveRecipeAction,
  setEditModeAction,
  setIndexVisibilityAction,
  updateRecipeAction
} from '../../actions/RecipeActions';
import { getSelectedRecipe } from '../../RecipeReducer';
import { IconButton } from '../IconButton/IconButton';
import { IconButtonColor } from '../IconButton/IconButttonColor';
import Cross from '../Icons/Cross';
import Edit from '../Icons/Edit';
import Plus from '../Icons/Plus';
import Remove from '../Icons/Remove';
import {
  buttonWrapperStyle,
  formStyle,
  recipeFormContentStyle,
  recipeFormFieldInputStyle,
  recipeFormFieldStyle,
  recipeFormIngredientIconStyle
} from './RecipeFormStyles';
import { RecipeValidationSchema } from './RecipeValidationSchema';

interface IRecipeFormValues {
  cookingTime: string;
  difficulty: Difficulty;
  imageUrl: string;
  ingredients: string[];
  instructions: string;
  name: string;
  preparationTime: string;
}

export interface IRecipeFormProps {
  disableEditMode: () => void;
  saveRecipeAction: (recipe: IRecipe) => void;
  selectedRecipe: IRecipe;
  showIndex: () => void;
  updateRecipeAction: (recipe: IRecipe, recipeName: string) => void;
}

interface IRecipeFormStateProps {
  selectedRecipe: IRecipe;
}

interface IRecipeFormDispatchProps {
  disableEditMode: () => void;
  saveRecipeAction: (recipe: IRecipe) => void;
  showIndex: () => void;
  updateRecipeAction: (recipe: IRecipe, recipeName: string) => void;
}

interface IRecipeFormState {
  cookingTime: number;
  difficulty: Difficulty;
  imageUrl: string;
  ingredients: string[];
  instructions: string;
  name: string;
  preparationTime: number;
}

export class RecipeFormComponent extends React.Component<IRecipeFormProps, IRecipeFormState> {

  constructor(props: IRecipeFormProps) {
    super(props);
    const {
      cookingTime,
      difficulty,
      imageUrl,
      ingredients,
      instructions,
      name,
      preparationTime,
    } = this.props.selectedRecipe || emptyRecipe;
    this.state = {
      cookingTime,
      difficulty,
      imageUrl,
      ingredients,
      instructions,
      name,
      preparationTime,
    };
    this.saveRecipe = this.saveRecipe.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  public saveRecipe(formValues: any) {
    const { name, preparationTime, cookingTime, imageUrl, difficulty, instructions, ingredients } = formValues;
    const recipe = {
      ...this.props.selectedRecipe,
      cookingTime: Number(cookingTime),
      difficulty,
      imageUrl,
      ingredients: ingredients.filter((ingredient: string) => !!ingredient.trim()),
      instructions,
      name,
      preparationTime: Number(preparationTime),
    };
    if (this.props.selectedRecipe) {
      this.props.updateRecipeAction(recipe, this.props.selectedRecipe.name);
    } else {
      this.props.saveRecipeAction(recipe);
    }
  }

  public cancelHandler() {
    if (this.props.selectedRecipe) {
      this.props.disableEditMode();
    } else {
      this.props.disableEditMode();
      this.props.showIndex();
    }
  }

  public render(): JSX.Element {
    const difficultyOptions = Object.keys(Difficulty).map((d: any) =>
      <option key={d} value={Difficulty[d]}>{Difficulty[d]}</option>
    );

    return (
      <div className={formStyle}>
        <div className={recipeFormContentStyle}>
          <h2>
            {this.props.selectedRecipe ? 'Edit Recipe' : 'Create New Recipe'}
          </h2>
          <Formik
            initialValues={{
              cookingTime: String(this.state.cookingTime),
              imageUrl: this.state.imageUrl,
              name: this.state.name,
              preparationTime: String(this.state.preparationTime),
              difficulty: this.state.difficulty,
              instructions: this.state.instructions,
              ingredients: this.state.ingredients,
            }}
            validationSchema={RecipeValidationSchema}
            onSubmit={this.saveRecipe}
            render={(formikBag: FormikProps<IRecipeFormValues>) => (
              <Form>
                <Field
                  name="imageUrl"
                  render={({ field, form }: FieldProps<IRecipeFormValues>) => (
                    <div className={recipeFormFieldStyle}>
                      <label htmlFor='imageUrl'><small>Image Url</small></label>
                      <input type="text" {...field} placeholder="Add a preview image url" />
                      {form.touched.imageUrl && form.errors.imageUrl && <small>{form.errors.imageUrl}</small>}
                    </div>
                  )}
                />
                <Field
                  name="name"
                  render={({ field, form }: FieldProps<IRecipeFormValues>) => (
                    <div className={recipeFormFieldStyle}>
                      <label htmlFor='name'><small>Recipe name</small></label>
                      <input type="text" {...field} placeholder="Add a recipe name" />
                      {form.touched.name && form.errors.name && <small>{form.errors.name}</small>}
                    </div>
                  )}
                />
                <Field
                  name="preparationTime"
                  render={({ field, form }: FieldProps<IRecipeFormValues>) => (
                    <div className={recipeFormFieldStyle}>
                      <label htmlFor='preparationTime'><small>Preparation time in minutes</small></label>
                      <input type="text" {...field} placeholder="Add a preparation time in min" />
                      {form.touched.preparationTime && form.errors.preparationTime && <small>{form.errors.preparationTime}</small>}
                    </div>
                  )}
                />
                <Field
                  name="cookingTime"
                  render={({ field, form }: FieldProps<IRecipeFormValues>) => (
                    <div className={recipeFormFieldStyle}>
                      <label htmlFor='cookingTime'><small>Cooking time in minutes</small></label>
                      <input type="text" {...field} placeholder="Add a cooking time in min" />
                      {form.touched.cookingTime && form.errors.cookingTime && <small>{form.errors.cookingTime}</small>}
                    </div>
                  )}
                />
                <Field
                  name="difficulty"
                  render={({ field, form }: FieldProps<IRecipeFormValues>) => (
                    <div className={recipeFormFieldStyle}>
                      <label htmlFor='difficulty'><small>Difficulty</small></label>
                      <select {...field}>
                        {difficultyOptions}
                      </select>
                    </div>
                  )}
                />
                <Field
                  name="instructions"
                  render={({ field, form }: FieldProps<IRecipeFormValues>) => (
                    <div className={recipeFormFieldStyle}>
                      <label htmlFor='instructions'><small>Instructions</small></label>
                      <textarea rows={8} {...field} placeholder="Add your cooking instructions here" />
                      {form.touched.instructions && form.errors.instructions && <small>{form.errors.instructions}</small>}
                    </div>
                  )}
                />
                <FieldArray
                  name="ingredients"
                  render={arrayHelpers => (
                    <div className={recipeFormFieldStyle}>
                      <label htmlFor='ingredients'><small>Ingredients</small></label>
                      {formikBag.values.ingredients && formikBag.values.ingredients.length > 0 ? (
                        formikBag.values.ingredients.map((ingredient, index) => (
                          <div key={index} className={recipeFormFieldInputStyle}>
                            <Field name={`ingredients.${index}`} value={formikBag.values.ingredients[index]} />
                            <i className={recipeFormIngredientIconStyle + ' remove'} onClick={() => arrayHelpers.remove(index)}><Remove /></i>
                            <i className={recipeFormIngredientIconStyle + ' add'} onClick={() => arrayHelpers.push('')}><Plus /></i>
                          </div>
                        ))
                      ) : (
                          <IconButton
                            onClickCallback={() => arrayHelpers.push('')}
                            buttonText='Add an ingredient'
                            icon={<Plus />}
                            color={IconButtonColor.GREEN}
                          />
                        )}
                    </div>
                  )}
                />
                <div className={buttonWrapperStyle}>
                  <IconButton
                    isSubmitButton={true}
                    buttonText='Save Recipe'
                    icon={<Edit />}
                    color={IconButtonColor.GREEN}
                  />
                  <IconButton
                    onClickCallback={this.cancelHandler}
                    buttonText='Cancel'
                    icon={<Cross />}
                    color={IconButtonColor.RED}
                  />
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState, ownProps: {}): IRecipeFormStateProps => {
  return {
    selectedRecipe: getSelectedRecipe(state)
  }
}

const mapDispatchToProps = (dispatch: any): IRecipeFormDispatchProps => {
  return {
    disableEditMode: () => dispatch(setEditModeAction(false)),
    saveRecipeAction: (recipe: IRecipe) => dispatch(saveRecipeAction(recipe)),
    showIndex: () => dispatch(setIndexVisibilityAction(true)),
    updateRecipeAction: (recipe: IRecipe, recipeName: string) => dispatch(updateRecipeAction(recipe, recipeName))
  }
}

export const RecipeForm = connect(mapStateToProps, mapDispatchToProps)(RecipeFormComponent)

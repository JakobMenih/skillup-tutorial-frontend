import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { ProductType } from '../../models/product'
import * as Yup from 'yup'

export interface CreateUpdateProductFields {
  title: string
  description: string
  price: number
}

interface Props {
  defaultValues?: ProductType
}

export const useCreateUpdateProductForm = ({ defaultValues }: Props) => {
  const CreateProductSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required'),
  })

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      price: 0,
      ...defaultValues,
    },
    mode: 'onSubmit',
    resolver: yupResolver(CreateProductSchema),
  })

  return {
    handleSubmit,
    errors,
    reset,
    control,
  }
}

export type CreateUpdateProductForm = ReturnType<
  typeof useCreateUpdateProductForm
>
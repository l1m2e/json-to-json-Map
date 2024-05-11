export const target = reactive({
  id: 1,
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA',
  },
  email: 'john.doe@example.com',
  data: [
    {
      label: '1',
      value: 0,
    },
    {
      label: '2',
      value: 3,
    },
  ],
})

export const source = reactive({
  user_id: 1,
  full_name: 'John Doe',
  contact_info: {
    email_address: 'john.doe@example.com',
  },
  location: {
    street_address: '123 Main St',
    city: 'Anytown',
    country: 'USA',
  },
},
)

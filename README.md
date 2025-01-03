# CustomerPoints Component

## Description
The `CustomerPoints` component displays the reward points accumulated by each customer per month and in total.

## Props
- `data` (Object)  
   - `Structure`:  
     ```json
     {
       "1": {
         "total": 250,
         "monthly": {
           "January": 90,
           "February": 150,
           "March": 10
         }
       }
     }
     ```

## Usage
```jsx
<CustomerPoints data={rewards} />

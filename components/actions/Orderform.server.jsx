// OrderForm.server.jsx
import FormContent from '@/components/order/form';
import { orderHandler } from '@/actions/orderHandler';

export default function OrderForm() {
    return <FormContent orderHandler={orderHandler} />;
}

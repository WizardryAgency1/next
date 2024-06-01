import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Terminal } from 'lucide-react';

const AlertComponent = ({ title, description }: { title: string; description: string }) => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  );
};

const formSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(50),
  text: z.string().min(5).max(200),
});

const Send = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [alertNotification, setAlertNotification] = useState<boolean>(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      username: '',
      text: '',
    },
  });

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Error sending message');
      }

      const data = await response.json();
      setIsLoading(false);
      setAlertNotification(true);
      setTimeout(() => {
        setAlertNotification(false);
      }, 2000)
      // Handle successful response, e.g., display a success message to the user
    } catch (error: any) {
      console.error('Error:', error);
      setIsLoading(false);
      setErrorMessage(error.message || 'Error sending message');
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)' }}
      className="z-10 p-4 rounded-2xl shadow-lg bg-gray-800 border border-gray-700 m-auto"
      style={{ minWidth: '300px' }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-white ">
          <h1 className="text-center text-lg font-bold">Contact me</h1>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    {...field}
                    className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Username"
                    {...field}
                    className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormDescription>At least 3 characters.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Text</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Write me"
                    type="text"
                    {...field}
                    className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant="outline"
            type="submit"
            className="w-full p-2 rounded-md bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
      </Form>
      {alertNotification && (
        <AlertComponent title={'Send !'} description={'well, I will contact'} />
      )}
    </motion.div>
  );
};

export default Send;

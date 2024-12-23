import Link from 'next/link';

export default function FormNavigation() {
  return (
    <nav className="flex space-x-4 mb-4">
      <Link href="pages/form/step1">Step 1</Link>
      <Link href="pages/form/step2">Step 2</Link>
      <Link href="pages/form/step3">Step 3</Link>
      <Link href="pages/form/step4">Step 4</Link>
    </nav>
  );
}
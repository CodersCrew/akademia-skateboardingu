export function Rating({ rating, setRating }: any) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map(star => {
        return (
          <span
            key={star}
            className="`start ${rating >= star ? 'text-gold' : 'text-gray-500'} text-3xl` cursor-pointer"
            onClick={() => {
              setRating(star);
            }}
          >
            {' '}
            ★{' '}
          </span>
        );
      })}
    </div>
  );
}

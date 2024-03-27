import { contributors } from '../../data/acknowledgmentData';
import Developer from './Developer';

export default function Contributors(){
  return (
    <section id="contributors" className="py-20 border-t-2 border-b-2 border-primary/50">
      <div className="container">
        <div className="flex flex-wrap justify-center px-4">
            {
              contributors.developers.map((developer, index) => (
                <Developer developer={developer} key={index} />
              ))
            }
          </div>
        </div>
    </section>
  );
}
import ModeToggle from "@/components/ui/mode-toggle";
import { useParams } from "react-router-dom";

const PatientDetail = () => {
  const { id } = useParams();

  return (
    <>
      <div className="container flex flex-col items-center w-full max-w-screen-md py-8 mx-auto ">
        <div className="grid gap-4 sm:grid-cols-2">
          <img
            src="https://avatars.githubusercontent.com/u/124599?v=4"
            alt="img"
            className="w-full sm:w-[350px] h-[400px] sm:h-[350px] border border-border bg-accent rounded-3xl "
          />
          <div className="p-3">
            <p className="p-1 px-3 text-sm/4 bg-primary text-primary-foreground w-fit rounded-3xl">
              ID: {id}
            </p>
            <h1 className="pt-4 text-lg font-semibold md:text-xl">
              Dhruv Kapoor
            </h1>
            <p className="text-sm text-muted-foreground">some other stuff</p>

            <p className="pt-2 italic text-sm/6 text-balance">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam velit sapiente deleniti, laborum rerum ad! Nobis
              sapiente reiciendis quasi totam iste dolore similique
              exercitationem, nisi impedit incidunt expedita harum, culpa quas
              natus voluptatem aperiam aut iusto voluptates eos, laudantium
              adipisci hic ea quia. Ab quod incidunt labore numquam earum
              fugiat.
            </p>
          </div>
        </div>
        <p className="pt-8 text-base/7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a,
          quidem hic cum vero tempora aperiam aut distinctio asperiores alias id
          deserunt nobis qui incidunt veritatis veniam itaque eius officia ab
          tempore quisquam numquam. Quasi libero tenetur adipisci. Doloremque
          repellat culpa provident cum cumque quidem quia nihil optio autem.
          Dolor earum odit veniam libero veritatis minima placeat maxime!
          Eveniet magni architecto, praesentium repudiandae officiis, culpa enim
          blanditiis omnis sapiente amet
        </p>
        <p className="pt-8 text-base/7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a,
          quidem hic cum vero tempora aperiam aut distinctio asperiores alias id
          deserunt nobis qui incidunt veritatis veniam itaque eius officia ab
          tempore quisquam numquam. Quasi libero tenetur adipisci. Doloremque
          repellat culpa provident cum cumque quidem quia nihil optio autem.
          Dolor earum odit veniam libero veritatis minima placeat maxime!
          Eveniet magni architecto, praesentium repudiandae officiis, culpa enim
          blanditiis omnis sapiente amet totam ipsam ut laborum expedita.
          Repellendus magnam saepe corrupti? A tempore, eius dicta ullam quidem
          ea, consequuntur et minima non nam aspernatur at fugiat magni
          repellendus odio. Fugit, cum temporibus.
        </p>
        <p className="pt-8 text-base/7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a,
          quidem hic cum vero tempora aperiam aut distinctio asperiores alias id
          deserunt nobis qui incidunt veritatis veniam itaque eius officia ab
          tempore quisquam numquam. Quasi libero tenetur adipisci. Doloremque
          repellat culpa providen
        </p>
      </div>
      {/* <div className="grid grid-cols-12 gap-2 p-2 border border-border rounded-3xl">
        <img
          className="object-cover w-full border-none col-span-full bg-secondary max-h-96 sm:col-span-6 lg:h-52 lg:col-span-2 rounded-2xl"
          src="https://avatars.githubusercontent.com/u/124599?v=4"
        />
        <div className="grid grid-rows-3 gap-2 p-2 border col-span-full border-border sm:col-span-6 rounded-2xl lg:col-span-3">
          <div className="flex items-center justify-start p-3 duration-200 bg-secondary/50 hover:bg-secondary/70 rounded-xl place-items-center">
            <h1 className="text-lg font-semibold text-secondary-foreground">
              Random Person
            </h1>
          </div>
        </div>
      </div> */}
      <ModeToggle />
    </>
  );
};

export default PatientDetail;

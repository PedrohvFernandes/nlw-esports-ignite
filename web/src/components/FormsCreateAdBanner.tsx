import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'
import { CreatAdBanner } from '../components/CreateAdBanner'
import { Input } from './Form/Input'

export function FormsCreateAdBanner() {
  return (
    // RadixUi
    <Dialog.Root>
      <CreatAdBanner />

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
          <Dialog.Title className="text-3xl font-black">
            Publique um anúncio
          </Dialog.Title>

          <form className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">
                Qual o game?
              </label>
              <Input
                id="game"
                placeholder="Selecione o game que deseja jogar"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">
                Seu nome (ou nickname)
              </label>
              <Input id="name" placeholder="Como te chamam dentro do game?" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearPlaying" className="font-semibold">
                  Joga há quantos anos?
                </label>
                <Input
                  id="yearPlaying"
                  min={0}
                  type="number"
                  placeholder="Tudo bem ser ZERO"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="discord" className="font-semibold">
                  Qual o seu Discord?
                </label>
                <Input id="discord" placeholder="Usuário#0000" />
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="weekDays" className="font-semibold">
                  Quando costuma jogar?
                </label>
                <div className='grid grid-cols-4 gap-2'>
                  <button 
                    title='Domingo'
                    className='w-8 h-8 rounded bg-zinc-900'
                  >
                      D
                  </button>
                  <button 
                    title='Segunda'
                    className='w-8 h-8 rounded bg-zinc-900'
                  >
                      S
                  </button>
                  <button 
                    title='Terça'
                    className='w-8 h-8 rounded bg-zinc-900'
                  >
                      T
                  </button>
                  <button 
                    title='Quarta'
                    className='w-8 h-8 rounded bg-zinc-900'
                  >
                      Q
                  </button>
                  <button 
                    title='Quinta'
                    className='w-8 h-8 rounded bg-zinc-900'
                  >
                      Q
                  </button>
                  <button 
                    title='Sexta'
                    className='w-8 h-8 rounded bg-zinc-900'
                  >
                      S
                  </button>
                  <button 
                    title='Sábado'
                    className='w-8 h-8 rounded bg-zinc-900'
                  >
                      S
                  </button>
                </div>
              </div>
              <div className='flex flex-col gap-2 flex-1'>
                <label htmlFor="hourStart" className="font-semibold">
                  Qual horário do dia?
                </label>
                <div className='grid grid-cols-2 gap-2'>
                  <Input id="hourStart" type="time" placeholder="De" />
                  <Input id="hourEnd" type="time" placeholder="Até" />
                </div>
              </div>
            </div>

            <div className='mt-2 flex gap-2 text-sm'>
              <Input type="checkbox" />
              <span>Costumo me conectar ao chat de voz</span>
            </div>
            <footer className='mt-4 flex justify-end gap-4'>
              <Dialog.Close 
                type='button'
                className='bg-zinc-500 px-5 h-12 rounded-md font-semibold'
              >
                Cancelar
              </Dialog.Close>
              <button 
                type="submit"
                className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3'
              >
                <GameController 
                  size={24}
                />
                Encontrar DUO
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

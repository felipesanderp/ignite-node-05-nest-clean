import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { ValueObject } from '@/core/entities/value-object'

export interface CommentWithAutorProps {
  commentId: UniqueEntityId
  content: string
  authorId: UniqueEntityId
  author: string
  createdAt: Date
  updatedAt?: Date | null
}

export class CommentWithAutor extends ValueObject<CommentWithAutorProps> {
  get commentId() {
    return this.props.commentId
  }

  get content() {
    return this.props.content
  }

  get authorId() {
    return this.props.authorId
  }

  get author() {
    return this.props.author
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(props: CommentWithAutorProps) {
    return new CommentWithAutor(props)
  }
}
